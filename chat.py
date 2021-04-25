import random
import json
from googletrans import Translator
import torch

from model import NeuralNet
from nltk_utils import bag_of_words, tokenize
translator = Translator()
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('intents.json', 'r') as json_data:
    intents = json.load(json_data)

FILE = "data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

bot_name = "Sam"
print("Let's chat! (type 'सोडा' to exit)")
while True:
    # sentence = "do you use credit cards?"
    sentence = input("You: ")
    sentence = translator.translate(sentence, dest='en', src='mr').text
    if sentence.lower() == "quit" or sentence.lower() == "leave":
        break

    sentence = tokenize(sentence)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]
    else_statement = translator.translate(
        'I do not understand', src='en', dest='mr').text
    probs = torch.softmax(output, dim=1)
    prob = probs[0][predicted.item()]
    if prob.item() > 0.75:
        for intent in intents['intents']:
            if tag == intent["tag"]:
                output = random.choice(intent['responses'])
                output = translator.translate(output, src='en', dest='mr').text
                print(f"{bot_name}: {output}")
    else:
        print(f"{bot_name}: {else_statement}...")

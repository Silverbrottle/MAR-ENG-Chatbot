from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import os


def train(bot):
    path = 'data\\marathi\\'
    for file in os.listdir(path):
        data = open(path + file, 'r', encoding="utf8").readlines()
        bot.train(data)


def main():
    bot = ChatBot('My_Bot')
    bot2 = ListTrainer(bot)
    train(bot2)


if __name__ == '__main__':
    main()

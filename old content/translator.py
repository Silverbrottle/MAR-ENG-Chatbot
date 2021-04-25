from googletrans import Translator

translator = Translator()
while True:
    txt = input()
    if txt != "Bye":
        new_lang = translator.translate(txt, dest="mr")
        print(new_lang.text)
    else:
        print(translator.translate('Bye', dest="mr").text)
        break

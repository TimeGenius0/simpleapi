import pyjokes
a ="const elementToRemove= document.querySelector(''div._2jJNpBqXMbbyOiGCElTYxZ'');elementToRemove.parentNode.removeChild(elementToRemove);"

def main(args):
  joke = pyjokes.get_joke()
  return {
    'body': {
      'response_type': 'in_channel',
      'text': a
    }
  }

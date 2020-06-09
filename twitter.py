import tweepy
import time

auth = tweepy.OAuthHandler("2YlZGjPFZLuIA9u2pB0vhbo0q","LVIlFLrxPJo1vZa2I194PbRd5kcDdS19gEcwDXr9yMt7ubMR2t")

auth.set_access_token("1269100430765809671-odDJF4vQ4CL17X45fWpZFWoW6JmRjg","qtsVhyxdJdxYfgFc5NAXhLVI84xTekqyzWKwcZDUVztn8")

api = tweepy.API(auth, wait_on_rate_limit=True)

user = api.me()


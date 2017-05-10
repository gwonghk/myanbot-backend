# Node.js Backend for [SolarLEAP Chatbot & Bot Editor Myanbot Project](https://docs.google.com/presentation/d/1Wdcy2IacZ0bgZCRlWsdO3RfQJ0TKHxuhp8mB8RQPM0o/edit?usp=sharing)

####Requirements:
1. [Intel Education Content Access Point](http://www.intel.com/content/www/us/en/education/products/content-access-point.html) (Or any server)
2. [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/corenlp-server.html)
3. [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat)
4. [Apache Solr](http://www.solrtutorial.com/solr-in-5-minutes.html#Install)
5. Myanbot
6. Myanbot Editor Frontend
7. Myanbot Backend

## Setup

####[Myanbot](https://github.com/Asegier/myanbot/):
Configure the Rocket.Chat adapter for hubot:
```javascript
$ export ROCKETCHAT_ROOM=‘’
$ export LISTEN_ON_ALL_PUBLIC=true
$ export ROCKETCHAT_USER=myanbot
$ export ROCKETCHAT_PASSWORD=password
$ export ROCKETCHAT_AUTH=ldap
$ export ROCKETCHAT_URL=http://192.168.100.105:3000 (rocket chat ip here)
```
Start the hubot with adapter:
``` $ bin/hubot -a rocketchat ```

####[Myanbot Editor Frontend](https://github.com/Asegier/treeeditor):
Start react with `$ npm start`

####[Myanbot Backend](https://github.com/gwonghk/myanbot-backend):
From the directory, start the server with `$ nodemon`

####Startup Required Services on Existing SolarLEAP Content Access Point:
- *Stanford CoreNLP*: ` $ cd /media/RACHEL/services/CoreNLP/stanford-corenlp-full-2016-10-31/ && java -mx1g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port 9000 -timeout 15000 `
- *Rocket.Chat*: 
`$ cd /media/RACHEL/services/Rocket.Chat/ && meteor `
- *Hubot*:
` $ bin/hubot -a rocketchat `
- *Apache Solr*:
`
 $ sudo su - solr`
 `$ cd /media/RACHEL/services/solr-6.5.0/ && bin/solr start -e cloud -noprompt `
- *Node Backend*:
`$ cd /media/RACHEL/services/myanbot-backend/ && nodemon`

## Demo


####Old Home Page:
[![Before](http://i.imgur.com/laqr9XC.gif)](http://i.imgur.com/laqr9XC.gif)


####New Home Page:
[![Greet](http://i.imgur.com/lCeOhQT.gif)](http://i.imgur.com/lCeOhQT.gif)


####Retrieval Based Chat:
[![Chat](http://i.imgur.com/rxoQ0li.gif)](http://i.imgur.com/rxoQ0li.gif)


####Wikipedia Search:
[![Wiki](http://i.imgur.com/4RzMR7u.gif)](http://i.imgur.com/4RzMR7u.gif)


####Local File Search:
[![Solr](http://i.imgur.com/rsfd96y.gif)](http://i.imgur.com/rsfd96y.gif)
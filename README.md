# NodeTutorial
* Node Tutorial
* node js 스터디를 위한 repo 생성
* markdown chatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code 

#Javascript 문서
* function - http://insanehong.kr/post/javascript-function/ 
* function 다시보기 - http://www.nextree.co.kr/p4150/
* function 생성 방법 2가지 - http://blog.xcoda.net/65
* java script promise - http://www.slideshare.net/UyeongJu/javascript-promises


# Node.js 문서 
* 한글화 - http://nodejs.sideeffect.kr/docs/ 
* libuv 서적 - http://nikhilm.github.io/uvbook/

# Node.js Restful Service
* mongo-node restful service - http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
* image upload - http://debuggable.com/posts/streaming-file-uploads-with-node-js:4ac094b2-b6c8-4a7f-bd07-28accbdd56cb
* file uploads - http://www.componentix.com/blog/9/file-uploads-using-nodejs-now-for-real 

# Cluster
* http://bit.ly/1FFIWCT

# MongoDB Handling
* node.js crud mongo - http://proserge.kh.ua/coding/index.php/post/31/MongoDB+for+NodeJs+devs+week2%3A+CRUD
* http://blog.gvm-it.eu/post/20462477195/getting-started-with-mongodb-and-node-js-on

# Error Handling
* Error Handing  기본 - http://nodeqa.com/nodejs_ref/1
* Error Handling Pattern - http://www.nodewiz.biz/nodejs-error-handling-pattern/ 
* domain api 사용법 - http://nodeqa.com/nodejs_ref/106

# 서버 전반적인 것들 
* nginx - http://www.joinc.co.kr/modules/moniwiki/wiki.php/man/12/MQTT/Tutorial 
* mqtt - http://www.joinc.co.kr/modules/moniwiki/wiki.php/man/12/MQTT/Tutorial

# 보안
* https node.js  서버 만들기 http://blog.saltfactory.net/221 
* https node.js + andorid 연동하기  http://blog.saltfactory.net/220
* loopj https 서비스 만들때 검토사항 - http://stackoverflow.com/questions/11573108/self-signed-certificate-and-loopj-for-android * nginx https 설정법
* 


# MEAN Stack 참고 자료
* http://adrianmejia.com/blog/2014/09/28/angularjs-tutorial-for-beginners-with-nodejs-expressjs-and-mongodb/
* http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/ 
* http://adrianmejia.com/blog/2014/10/03/mean-stack-tutorial-mongodb-expressjs-angularjs-nodejs/


# 성능
* node.js vs python - http://blog.kgriffs.com/2012/11/13/python-vs-node-vs-pypy-benchmarks.html (많은 접속, 적은 데이터에 유리)
* 400~500명 정도가 접속하면 "write ECONNRESET", "write EPIPE" 등의 오류가 발생할 경우 
``` 
/etc/limits.conf 또는 /etc/security/limits.conf 를 여시고 맨밑에

hard nofile 9999999
soft nofile 999999  
추가해주시고 모두 로그아웃하고 재접속해서 테스트해보세요

안되면 위 방법 후 ulimit -n 999999 하고 나서 명령어 치시면 해결됨
``` 
# Nginx
* nginx 와 node.js 연동 - http://inspiredjw.tistory.com/21
* nginx 생활코딩 자료 - http://opentutorials.org/module/384/3462
* 네이버 개발자 블로그 - http://helloworld.naver.com/helloworld/textyle/192785

#기타 도움이 될만한 글들
* node.js ubuntu에 서비스 만들기 - http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/
* Thumbnail 생성 서비스 - https://github.com/bcoe/thumbd
* Jade (note frontend template engine) - http://www.learnjade.com/tour/tags-and-text/
* Garbage Collection -  http://blog.whitelife.co.kr/entry/Nodejs-Memory-%EA%B4%80%EB%A6%AC
* pm2 start app.js --node-args="--expose-gc" -- arg1 arg2 arg3

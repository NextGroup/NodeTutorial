# NodeTutorial
* Node Tutorial
* node js 스터디를 위한 repo 생성
* markdown chatsheet - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code 

#Javascript 문서
* function - http://insanehong.kr/post/javascript-function/ 
* function 다시보기 - http://www.nextree.co.kr/p4150/
* function 생성 방법 2가지 - http://blog.xcoda.net/65
* java script promise 패턴 - http://www.slideshare.net/UyeongJu/javascript-promises


# Node.js 문서 
* 한글화 - http://nodejs.sideeffect.kr/docs/ 

# Node.js Restful Service
* mongo-node restful service - http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/
* image upload - http://debuggable.com/posts/streaming-file-uploads-with-node-js:4ac094b2-b6c8-4a7f-bd07-28accbdd56cb
* file uploads - http://www.componentix.com/blog/9/file-uploads-using-nodejs-now-for-real 

# MongoDB Handling
* node.js crud mongo - http://proserge.kh.ua/coding/index.php/post/31/MongoDB+for+NodeJs+devs+week2%3A+CRUD
* http://blog.gvm-it.eu/post/20462477195/getting-started-with-mongodb-and-node-js-on

# Error Handling
* Error Handling Pattern - http://www.nodewiz.biz/nodejs-error-handling-pattern/ 
* domain api 사용법 - http://nodeqa.com/nodejs_ref/106

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
#기타 도움이 될만한 글들
* node.js ubuntu에 서비스 만들기 - http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/


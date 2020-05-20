$(document).ready(function(){
    $(document).on('click', '.control nav a', function(e){
        history.pushState(null,null,e.target.href) // 페이지가 새로고침 되지 않고 e.target.href(page1을 누르면 page1.html)로 url 끝 부분이 바뀜
        $('article').load(e.target.href+' article>.content') //article태그의 content내용을 바꿈
        e.preventDefault() //웹브라우저가 기본적으로 동작하는 동작을 막는다.(page눌러도 page1.html링크로 안 넘어감)
    })
    $(window).on('popstate', function(e){
        $('article').load(location.href+' article>.content')
    }) //뒤로가기를 눌렀을때의 문제 해결
    let audio = new Audio('Tyburn - Eden.mp3'); //audiotool.com
    $(document).on('click', '.control .player .play', function(e){
        audio.play();
    })
    $(document).on('click', '.control .player .pause', function(e){
        audio.pause();
    })
});
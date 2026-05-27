const obj = {
    // 메서드라고 한다... 근데 사람에 따라 함수라고도 한다
    doA:function(aa){
        console.log("obj doA function"+aa)
    }
}

//오브젝트 객체 {}, 배열(리스트) 객체 []
//aa
const aa = function(){
    console.log('aa function');
}

obj.doA();
aa();
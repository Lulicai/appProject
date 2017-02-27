
let Tools = {
    getUserId:function(){
        let id = sessionStorage.getItem('userID') || localStorage.getItem('userID');
        if(!id){
            window.location.hash="#/"
        }
        return id
    },
    getTime:function(um){

    },
    filterUsername:function(str){

    }
};

export {Tools}
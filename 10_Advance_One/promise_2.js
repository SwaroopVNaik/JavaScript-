let go_to_movie = (succes, failure)=> {
    
    let acc_balance = 500; 

    if(acc_balance >= 500){
        succes("go to movie without popcorn")
    }
    else{
        failure("go to pg")
    }

}

new Promise()
go_to_movie((response)=> {console.log(response);}, (err) => {console.log(err);}) 
const global={
    fncName:'',
    setFncName(fncName){
        this.fncName=fncName;
    },
    callable(){
        return this.fncName();
    }
}

export default global;

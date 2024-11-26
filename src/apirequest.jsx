async function apirequest(url ="" ,objoptions=null,errmsg=null){
    try{
        const response = await fetch(url,objoptions);
    if(!response.ok){
        throw Error("please reload the app")
    }
    }
    catch(err){
        errmsg = err.message
    }
    finally{
        return errmsg
        
    }
    
}
export default apirequest
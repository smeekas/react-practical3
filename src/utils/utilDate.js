const currentTime = new Date();
const weekday = new Date().toLocaleDateString("en-US", { weekday: "long" });
const month = new Date().toLocaleDateString("en-US", { month: "short" });
// const day = new Date().toLocaleDateString("en-US", { day: "numeric" });
const year = new Date().toLocaleDateString("en-US", { year: "numeric" });
// const day = new Date().getMinutes();

const getDay=()=>{
    return new Date().getMinutes();
}



export {currentTime,weekday,month,getDay,year};
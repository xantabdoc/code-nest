class CompoundInterest {
    //finding present value by future data
    future_present = (interest,periods) => {
        return Math.pow((1+interest),periods)
    }
    //finding future value by present data
    present_future = (interest,periods)=>{
        return Math.pow((1+interest),(periods*-1))
    }
    //finding annual value by future data
    future_annual = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        return ((future_present-1)/interest)
    }
    //finding future value by annual data
    annual_future = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        return (interest/(future_present-1))
    }
    //finding present value by annual data
    annual_present = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        return ((interest*future_present)/(future_present-1))
    }
    //finding annual value by present data
    present_annual = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        return ((future_present-1)/(interest*future_present))
    }
    //finding gradient value by annual data
    annual_gradient = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        return ((future_present - interest*periods-1)/(interest*future_present-interest))
    }
    //finding gradient value by present data
    present_gradient = (interest,periods)=>{
        const future_present = Math.pow((1+interest),periods)
        const powerInterest = Math.pow(interest,2)
        return ((future_present - interest*periods-1)/(powerInterest*future_present))
    }
}

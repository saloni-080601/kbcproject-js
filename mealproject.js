let food=require("readline-sync")
var day=food.question("enter a day")
var meal=food.question("enter a meal")
switch (day) {
    case "monday":
        switch (meal) {
            case "dinner":
                console.log(`palak-roti in ${(meal)}`)
                break;
            case "lunch":
                console.log(`tor dal-chawal in ${(meal)}`)
                break;
            default:
                console.log(`poha in ${(meal)}`)
                break;
        }
        break;
    case "tuesday":
        switch (meal) {
            case "dinner":
                console.log("sabaji-roti")
                break;
            case "lunch":
                console.log("dal-chawal,rayata")
            default:
                console.log("daliya")
                break;
        }
        break;
    case "wenesday":
    switch (meal) {
        case "dinner":
            console.log("panner-roti")
            break;
        case "lunch":
            console.log("dal-chawal,aluu")
        default:
            console.log("biscket")
            break;
    }
        break;
    case "thursday":
        switch (meal) {
            case "dinner":
                console.log("mathi-roti")
                break;
            case "lunch":
                console.log("kari-chawal")
            default:
                console.log("bada-pauu")
                break;
        }
        break;
    case "friday":
        switch (meal) {
            case "dinner":
                console.log("puri-sabji")
                break;
            case "lunch":
                console.log("dal-chawal,roti")
            default:
                console.log("poha,milk")
                break;
        }
        break;
    case "saturday":
        switch (meal) {
            case "dinner":
                console.log("sabaji-roti")
                break;
            case "lunch":
                console.log("pulao")
            default:
                console.log("idli")
                break;
        }
        break;
    case "sunday":
        switch (meal) {
            case "dinner":
                console.log("royabadi-roti")
                break;
            case "lunch":
                console.log("dal-chawal")
            default:
                console.log("paratha-pickal")
                break;
        }
        break;
    

    default:
        break;
}
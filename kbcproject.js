question=["How many continents are there?", "What is the capital of India?","NG mei kaun se course padhaya jaata hai?","which is circle in these option?"]
options=[["Four", "Nine", "Seven", "Eight"],["Chandigarh", "Bhopal", "Chennai", "Delhi"],["Software Engineering", "Counseling", "Tourism", "Agriculture"],[" π§ "," π  "," π»"," πΈ"]]
console.log("********WELCOME*********")
console.log()
console.log( "       π π π     ")
console.log()
console.log("QUIZE                π§ ")
console.log()
const kbc=require("readline-sync")
var i=0
t=0
t1=1
lol=10000
count=0
solution = [3, 4, 1,2] 
while (i<question.length){
    console.log(question[i])
    var j=0
    k=1
    while (j<options.length){
        console.log(k,".",options[i][j])
        j+=1
        k+=1
    }
    var z=["3.seven","4.eight","2.bhopal","4.delhi","1.software engineering","2.conuseling","1.π ","2. π§"]
    var use=kbc.question("do you want life line,yes or no ")  
    if (use=="yes"){
        console.log("50-50"," π‘ π‘ π‘")
        if (count==0){
            console.log(z[i+t]) 
            console.log(z[i+t1])
            ans=kbc.questionInt("enter a answer")
            if (solution[i]==ans){
                console.log("right")
                console.log( "π π π")
                console.log(("  CONGRATULATION  you Wonπ§βπΌ",lol))
                count+=1
            }else{
                console.log("wrong,,game over"," π π π")
                break}
            }
        else{
            console.log("you don't have life line")
            ans=kbc.questionInt("enter answer")
            if (solution[i]==ans){
                console.log("right")

                console.log( "π π π")
                console.log("  CONGRATULATION  you Wonπ§βπΌ",lol)
            }else{
                console.log("wrong,,game over"," π π π")
                break
            }
        }
    }else if (use=="no"){
        user=kbc.questionInt("enter a number")
        if (solution[i]==user){
            console.log("right")
            console.log( "π π π")
            console.log(("  CONGRATULATION  you Wonπ§βπΌ",lol))
        }else{
            console.log("game over"," π π π")
            break}
        }else
        console.log("wrong")
    lol+=10000  
    t+=1
    t1+=1
    i+=1
}   
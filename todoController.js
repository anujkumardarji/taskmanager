module.exports = function(app){

    var bodyParser = require('body-parser')
    var urlencodedParser = bodyParser.urlencoded({extended:false})

    var data = [{item: 'create app'},{item: 'Complete all the tasks'}]
    app.get('/todo',(req,res)=>{
        res.render('todo',{todos : data})
    })

    app.post('/todo',urlencodedParser,(req,res)=>{ 
        data.push(req.body) 
        res.json(data)
    })

    app.delete('/todo/:item',function(req,res){
        console.log('deleting started')
        data = data.filter(function(todo){ 

            return todo.item.replace(/ /g,'-') !== req.params.item.slice(0, -1);
        })
        console.log(data)
        res.json(data)
    })
 
}
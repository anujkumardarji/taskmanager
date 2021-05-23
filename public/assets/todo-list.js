$(document).ready(function(){
    alert('i am running')
    $('form').on('submit',function(){
       alert('clicked')
        var item = $('form input')
        var todo = {item = item.val}

        $.ajax({
            type:'POST',
            url:'/todo',
            data:todo,
            success:function(data){
                location.reload()
            }
        })
    })
    return false
})

 
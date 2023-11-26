AFRAME.registerComponent('marker-handler',{
    init:function(){
        this.el.addEventListener('markerFound',()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost',()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound:function(){
        var buttondiv = document.getElementById('button-div')
        buttondiv.style.display = 'flex'

        var ratingButton = document.getElementById('order-button')
        var orderButton = document.getElementById('order-summary-button')

        ratingButton.addEventListener('click',function(){
            swal({
                icon: 'warning',
                title: 'Order Summary',
                text: 'Work in Progress',
            })
        })
        orderButton.addEventListener('click',function(){
            swal({
                icon: 'success',
                title: 'Thanks for Ordering',
                text: 'Delivered Soon',
            })
        })
    },
    handleMarkerLost:function(){
        var buttondiv = document.getElementById('button-div')
        buttondiv.style.display = 'none'
    },
})

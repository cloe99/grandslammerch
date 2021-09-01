<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Cookie Policy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Shipping</a></li>
                        <li><a href="">Returns</a></li>
                        <li><a href="">Order Status</a></li>
                        <li><a href="">Payment Options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Online Shop</h4>
                    <ul>
                        <li><a href="/australian-open">Australian Open</a></li>
                        <li><a href="/roland-garros">Roland Garros</a></li>
                        <li><a href="/wimbledon">Wimbledon</a></li>
                        <li><a href="/us-open">US Open</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Available On</h4>
                    <div class="social-links">
                        <a target="_blank" href="https://www.apple.com/la/app-store/"><i class="big apple icon"/></a>
                        <a target="_blank" href="https://play.google.com/store?hl=es_AR&gl=US"><i class="big google play icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
    background-color: white;
    font-family: "Besley";
}

.container{
	max-width: 1170px;
	margin: 20px;
}

.row{
	display: flex;
	flex-wrap: wrap;
}

ul{
	list-style: none;
}

.footer-col{
   width: 25%;
   padding: 20px 15px;
   border-top: rgb(197, 197, 197) 1px solid;

    h4{
        font-size: 18px;
        color: #6d04c6;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }
    h4::before{
        content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: #6d04c6;
        height: 2px;
        width: 50px;
    }
    ul li:not(:last-child){
        margin-bottom: 10px;
    }
    ul li a{
        font-size: 16px;
        text-transform: capitalize;
        color: rgb(175, 175, 175);
        font-weight: 300;
        color: #888888;
        display: block;
        transition: all 0.3s ease;
    }
    ul li a:hover{
        color: rgb(110, 110, 110);
        padding-left: 8px;
    }
    .social-links a{
        display: inline-block;
        width: 30px;
        margin: 0 10px 10px 0;
        text-align: center;
        color: rgb(175, 175, 175);
    }
    .social-links a:hover{
        color: rgb(110, 110, 110);
    }
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
</style>



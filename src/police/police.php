<style scope>
    .police-img {
        width : 60%;
        margin-top : -150px;
    }
    .blank{
        height : 30vw;
    }
    .office-img {
        height: 30vw;
        position: absolute;
        bottom: 0px;
    }
    .col-sm-6 {
        width : 50%;
    }
    .desk-rect {
        cursor : pointer;
        position : absolute;
        bottom : 8vw;
        width : 10vw;
        height : 10vw;
    }
</style>
<div class="w-100">
    <img class="w-100 office-img" src="assets/images/police_office.png"/>
    <div class="row m-0 p-0">
        <div class="col-md-6 col-sm-6">
            <div>
                <img class="police-img" src="assets/images/police.png" />
            </div>
        </div>
        <div class="col-md-6 col-sm-6" align="center">
            <div>
                <img class="back-map-img" src="assets/images/back-map.png" onclick="goToURL('mainpage/mainpage.php')"/>
            </div>
            <div class="mt-5">
                <a href='https://forms.gle/XjJYMhJnMdNWshpE8' target="_blank">
                    <img class="item w-50" src="assets/images/submit.png"/>
                </a>
            </div>
        </div>
    </div>
    <div class="d-flex justify-content-center mr-5">
        <a class="cursor-default" href="assets/images/POLICE-PoliceIncidentReport.png" target="_blank">
            <div class="desk-rect"></div>
        </a>
    </div>
</div>
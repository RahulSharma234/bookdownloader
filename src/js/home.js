$(document).ready(function() {
      

    var container = $('.subjects')
    let size= 5;
    let value = [
        ['8', [ ["Hindi","https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/8thclass%2FHindi.zip?alt=media&token=0e42a0ea-f0d8-46fb-9f5c-342d9471f9f6"], 
        ['English', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/8thclass%2FEnglish.zip?alt=media&token=d54704a0-29f3-4f03-886e-c2eb0f7b9444"],
         ['Maths', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/8thclass%2FMaths.zip?alt=media&token=46c9a5fa-5151-44f8-b77b-7a6fcaa71297"],
          ['Science',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/8thclass%2FScience.zip?alt=media&token=56100f94-9420-46fc-ab7f-2db1fe09c81f"] ,
          ['Social Science' ,"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/8thclass%2FSST%201.zip?alt=media&token=138622a2-5d04-4d2d-a3c4-b80d01b5fd39"]]],
        ['9', [ ["Hindi","https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/9thfile%2FHindi.zip?alt=media&token=6337f508-e0b5-4dcd-bb26-c02afbc6fa6d"],
         ['English', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/9thfile%2FEnglish.zip?alt=media&token=17d64b5f-3e6d-4b8b-9ae4-ba00bed28e58"], 
        ['Maths', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/9thfile%2FMaths.zip?alt=media&token=5c73b517-0973-46d2-8cf9-f53c9dbbd446"],
         ['Science',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/9thfile%2FScience.zip?alt=media&token=51264d1d-8dfd-4d9e-b42f-a3889e2ec906"] ,
         ['Social Science' ,"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/9thfile%2Fsst.zip?alt=media&token=1438a3cf-5f73-4ba6-9271-e430e6d97c48"]]],
        ['10', [ ["Hindi","https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/10thfile%2FHindi.zip?alt=media&token=242cd501-3bce-4e0d-905f-82a6cc7aa498"],
         ['English', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/10thfile%2FEnglish.zip?alt=media&token=b0ecaffb-a634-4f2f-b34b-ffa6387a1a82"],
          ['Maths', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/10thfile%2FMaths.zip?alt=media&token=1d9757a3-69ab-4c63-9f8e-8fc28b9174eb"], 
          ['Science',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/10thfile%2FScience.zip?alt=media&token=19fc4979-7f49-4f78-9c32-7f6b9363e32a"] ,
          ['Social Science' ,"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/10thfile%2FSST.zip?alt=media&token=4f425623-627e-469f-9cae-e5bf53080fa6"]] ],
        ['11', [ ["Hindi","https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FHindi.zip?alt=media&token=c7ec55b2-f833-4c25-9233-4e64e3f7f7d8"],
         ['English', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FEnglish.zip?alt=media&token=9a1724ee-20ef-4b84-b323-a5364c52b880"],
          ['Maths', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FMaths.zip?alt=media&token=3e48d19a-a17e-4c8d-bbf9-a73c7a3030c5"], 
          ['Physics',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FPhysics%20_Part1.zip?alt=media&token=f2417edb-760f-4a62-9f7a-cfd21862fb92"] ,
          ['Chemistry' ,"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FChem_Part%201.zip?alt=media&token=db29b4fb-68b0-49ca-89e8-8fe439bef2b7"],
           ['Biology',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/11thfile%2FBio.zip?alt=media&token=c661415a-43dc-4dd3-b8c1-022f5f88b200"]] ],
        ['12', [ ["Hindi","https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2FHindi.zip?alt=media&token=0ca6329e-9871-4382-bc25-a300b2308859"],
         ['English', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2FEnglish.zip?alt=media&token=c1280171-1ec7-459f-a723-27619f49e688"], 
         ['Maths', "https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2FMathsPart1.zip?alt=media&token=0a474f77-4ea1-486c-830a-6753ddf5c310"], 
         ['Physics',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2FPhysics_part1.zip?alt=media&token=8b5ff4be-d832-44dd-880e-4e86d50e1a07"] ,
         ['Chemistry ' ,"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2FChem_Part1.zip?alt=media&token=7f19da4b-a96a-40c2-b8a6-e3e7601f67f5"], 
         ['Biology',"https://firebasestorage.googleapis.com/v0/b/password-manager-a7ea0.appspot.com/o/12thfile%2Fbio.zip?alt=media&token=65fdedf1-f135-4260-8ddd-39c6b3b733a7"]]  ],
    ];
    
    let list = '';
    
    value.forEach(data => {
        list += `
            <div class="container">
                <h2>Class ${data[0]} NCERT Book lists</h2>
                <ul>
                    ${data[1].map(item => `<li onclick="subjectItemClicked('${item[1]}')">${item[0]}</li>`).join('')}
                </ul>
            </div>`;
    });
    
    container.html(list);

});


    
    function subjectItemClicked(item) {
        window.location= item
    }
    
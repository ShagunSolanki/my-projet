var player1,player1img;
var cloud;
var edges;
var A,B,C,D;
var E,F,G,H;
var I,J,K,L;
var M,N,O,P;
var Q,R,S,T;
var U,V,W,X;
var Y,Z;
var score1 = 0;
var score2 = 0;

function preload() {
  girlimg = loadImage("girl.png");
   cloudimg = loadImage("cloud.png");
   Aimg = loadImage("A.jpg");
   Bimg = loadImage("B.png");
   Cimg = loadImage("C.jpg");
   Dimg = loadImage("D.jpg");
   Eimg = loadImage("E.png");
   Fimg = loadImage("F.png");
   Gimg = loadImage("G.jpg");
   Himg = loadImage("H.png");
   Iimg = loadImage("I.png");
   Jimg = loadImage("J.png");
   Kimg = loadImage("K.jpg");
   Limg = loadImage("L.jpg");
   Mimg = loadImage("M.png");
   Nimg = loadImage("N.jpg");
   Oimg = loadImage("O.png");
   Pimg = loadImage("P.jpg");
   Qimg = loadImage("Q.jpg");
   Rimg = loadImage("R.png");
   Simg = loadImage("S.jpg");
   Timg = loadImage("T.jpg");
   Uimg = loadImage("U.jpg");
   Vimg = loadImage("V.jpg");
   Wimg = loadImage("W.jpg");
   Ximg = loadImage("X.jpg");
   Yimg = loadImage("Y.png");
   Zimg = loadImage("Z.png");
   bgimg = loadImage("Background.png");
   boyimg = loadImage("Boy.png");
}

function setup(){
    var canvas = createCanvas(1200,600);

    girl = createSprite(200,500,50,50);
    girl.addImage(girlimg);
    girl.scale = 0.15;


    boy = createSprite(900,500,50,50);
    boy.addImage(boyimg);
    boy.scale = 0.16;
    cloudsGroup = new Group();
    Agroup =  new Group();
    Bgroup =  new Group();
    Cgroup =  new Group();
    Dgroup =  new Group();
    Egroup =  new Group();
    Fgroup =  new Group();
    Ggroup =  new Group();
    Hgroup =  new Group();
    Igroup =  new Group();
    Jgroup =  new Group();
    Kgroup =  new Group();
    Lgroup =  new Group();
    Mgroup =  new Group();
    Ngroup =  new Group();
    Ogroup =  new Group();
    Pgroup =  new Group();
    Qgroup =  new Group();
    Rgroup =  new Group();
    Sgroup =  new Group();
    Tgroup =  new Group();
    Ugroup =  new Group();
    Vgroup =  new Group();
    Wgroup =  new Group();
    Xgroup =  new Group();
    Ygroup =  new Group();
    Zgroup =  new Group();

    edges = createEdgeSprites();


    
}

function draw(){
    background(bgimg);


    if(keyDown("W") || girl.y >= 450){
      girl.velocityY = -10
    }
girl.velocityY = girl.velocityY + 0.8;

if(keyDown(UP_ARROW) ||boy.y >= 450){
  boy.velocityY = -10
}
boy.velocityY = boy.velocityY + 0.8;

girl.collide(edges[3]);
boy.collide(edges[3]);

console.log(girl.y);
console.log(boy.y);

    spawnClouds();
    selectalphapbets();


if(girl.isTouching(Agroup)){
  Agroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Bgroup)){
  Bgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Cgroup)){
  Cgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Dgroup)){
  Dgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Egroup)){
  Egroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Fgroup)){
  Fgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Ggroup)){
  Ggroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Hgroup)){
  Hgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Igroup)){
  Igroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Jgroup)){
  Jgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Kgroup)){
  Kgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Lgroup)){
  Lgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Mgroup)){
  Mgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Ngroup)){
  Ngroup.destroyEach();
  score1 = score1 + 1;
} 
if(girl.isTouching(Ogroup)){
  Ogroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Pgroup)){
  Pgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Qgroup)){
  Qgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Rgroup)){
  Rgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Sgroup)){
  Sgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Tgroup)){
  Tgroup.destroyEach();
  score1 = score1 + 1;
} 
if(girl.isTouching(Ugroup)){
  Ugroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Vgroup)){
  Vgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Wgroup)){
  Wgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Xgroup)){
  Xgroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Ygroup)){      
  Ygroup.destroyEach();
  score1 = score1 + 1;
}
if(girl.isTouching(Zgroup)){
  Zgroup.destroyEach();
  score1 = score1 + 1;
}

if(boy.isTouching(Agroup)){
  Agroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Bgroup)){
  Bgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Cgroup)){
  Cgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Dgroup)){
  Dgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Egroup)){
  Egroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Fgroup)){
  Fgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Ggroup)){
  Ggroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Hgroup)){
  Hgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Igroup)){
  Igroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Jgroup)){
  Jgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Kgroup)){
  Kgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Lgroup)){
  Lgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Mgroup)){
  Mgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Ngroup)){
  Ngroup.destroyEach();
  score1 = score1 + 1;
} 
if(boy.isTouching(Ogroup)){
  Ogroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Pgroup)){
  Pgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Qgroup)){
  Qgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Rgroup)){
  Rgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Sgroup)){
  Sgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Tgroup)){
  Tgroup.destroyEach();
  score1 = score1 + 1;
} 
if(boy.isTouching(Ugroup)){
  Ugroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Vgroup)){
  Vgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Wgroup)){
  Wgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Xgroup)){
  Xgroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Ygroup)){      
  Ygroup.destroyEach();
  score1 = score1 + 1;
}
if(boy.isTouching(Zgroup)){
  Zgroup.destroyEach();
  score1 = score1 + 1;
}


    drawSprites();
    fill("RED");
    stroke("red");
    strokeWeight(2);
    textSize(25);

    text("GIRL'S ALPHABET COUNT : " + score1 , 20,40);
    
    fill("RED");
    stroke("red");
    strokeWeight(2);
    textSize(25);

    text("BOY'S ALPHABET COUNT : " + score1 , 800,40);

}

function spawnClouds() {
    //write code here to spawn the clouds
    if (frameCount % 80 === 0) {
      cloud = createSprite(1200,120,30,50);
      cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudimg)
      cloud.scale = 0.3;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
      cloud.lifetime = 400;
      
      
      
      //add each cloud to the group
      cloudsGroup.add(cloud);
    }
    
  }

  function selectalphapbets(){
      var rand = Math.round(random(1,26));
      if (frameCount % 80 === 0) {
          textSize(30)
          fill("white");
          console.log(rand)
          if(rand === 1){
            A = createSprite(cloud.x,cloud.y,20,20)
            A.addImage(Aimg);
            A.velocityX = -3;
            A.scale = 0.2;
            Agroup.add(A);
                          
          }
          if(rand === 2){
             B = createSprite(cloud.x,cloud.y,20,20)
            B.addImage(Bimg);
            B.velocityX = -3;
            B.scale = 0.2;
            Bgroup.add(B);
        }
        if(rand === 3){
           C = createSprite(cloud.x,cloud.y,20,20)
            C.addImage(Cimg)
            C.velocityX = -3;
            C.scale = 0.2;
            Cgroup.add(C);
        }
        if(rand === 4){
           D = createSprite(cloud.x,cloud.y,20,20)
            D.addImage(Dimg);
          D.velocityX = -3;
          D.scale = 0.2;
          Dgroup.add(D);
        }
        if(rand === 5){
           E = createSprite(cloud.x,cloud.y,20,20)
          E.addImage(Eimg);
          E.velocityX = -3;
          E.scale = 0.2;
          Egroup.add(E);
        }
  
        if(rand === 6){
          var F = createSprite(cloud.x,cloud.y,20,20)
        F.addImage(Fimg);
        F.velocityX = -3;
        F.scale =  0.2;
        Fgroup.add(F);
      }
  
      if(rand === 7){
        var G = createSprite(cloud.x,cloud.y,20,20)
     G.addImage(Gimg);
      G.velocityX = -3;
      G.scale =  0.2;
      Ggroup.add(G);
    }
  
    if(rand === 8){
      var H = createSprite(cloud.x,cloud.y,20,20)
    H.addImage(Himg);
    H.velocityX = -3;
    H.scale = 0.2;
    Hgroup.add(H);
  }
  
  if(rand === 9){
    var I = createSprite(cloud.x,cloud.y,20,20)
  I.addImage(Iimg);
  I.velocityX = -3;
  I.scale = 0.2;
  Igroup.add(I);
}
if(rand === 10){
  var J = createSprite(cloud.x,cloud.y,20,20)
J.addImage(Jimg);
J.velocityX = -3;
J.scale = 0.2;
Jgroup.add(J);
}
if(rand === 11){
  var K = createSprite(cloud.x,cloud.y,20,20)
K.addImage(Kimg);
K.velocityX = -3;
K.scale = 0.2;
Kgroup.add(K);
}
if(rand === 12){
  var L = createSprite(cloud.x,cloud.y,20,20)
L.addImage(Limg);
L.velocityX = -3;
L.scale = 0.2;
Lgroup.add(L);
}
if(rand === 13){
  var M = createSprite(cloud.x,cloud.y,20,20)
M.addImage(Mimg);
M.velocityX = -3;
M.scale = 0.2;
Mgroup.add(M);
}
if(rand === 14){
  var N = createSprite(cloud.x,cloud.y,20,20)
N.addImage(Nimg);
N.velocityX = -3;
N.scale = 0.2;
Ngroup.add(N);
}
if(rand === 15){
  var O = createSprite(cloud.x,cloud.y,20,20)
O.addImage(Oimg);
O.velocityX = -3;
O.scale = 0.2;
Ogroup.add(O);
}
if(rand === 16){
  var P = createSprite(cloud.x,cloud.y,20,20)
P.addImage(Pimg);
P.velocityX = -3;
P.scale = 0.2;
Pgroup.add(P);
}
if(rand === 17){
  var Q = createSprite(cloud.x,cloud.y,20,20)
Q.addImage(Qimg);
Q.velocityX = -3;
Q.scale =0.2;
Qgroup.add(Q);
}
if(rand === 18){
  var R = createSprite(cloud.x,cloud.y,20,20)
R.addImage(Rimg);
R.velocityX = -3;
R.scale = 0.2;
Rgroup.add(R);
}
if(rand === 19){
var S = createSprite(cloud.x,cloud.y,20,20)
S.addImage(Simg);
S.velocityX = -3;
S.scale = 0.2;
Sgroup.add(S);
}
if(rand === 20){
var T = createSprite(cloud.x,cloud.y,20,20)
T.addImage(Timg);
T.velocityX = -3;
T.scale = 0.2;
Tgroup.add(T);
}
if(rand === 21){
var U = createSprite(cloud.x,cloud.y,20,20)
U.addImage(Uimg);
U.velocityX = -3;
U.scale = 0.2;
Ugroup.add(U);
}
if(rand === 22){
  var V = createSprite(cloud.x,cloud.y,20,20)
V.addImage(Vimg);
V.velocityX = -3;
V.scale =0.2;
Vgroup.add(V);
}
if(rand === 23){
var W = createSprite(cloud.x,cloud.y,20,20)
W.addImage(Wimg);
W.velocityX = -3;
W.scale = 0.2;
Wgroup.add(W);
}
if(rand === 24){
var X = createSprite(cloud.x,cloud.y,20,20)
X.addImage(Ximg);
X.velocityX = -3;
X.scale = 0.2;
Xgroup.add(X);
}
if(rand === 25){
var Y = createSprite(cloud.x,cloud.y,20,20)
Y.addImage(Yimg);
Y.velocityX = -3;
Y.scale = 0.2;
Ygroup.add(Y);
}
if(rand === 26){
  var Z = createSprite(cloud.x,cloud.y,20,20)
Z.addImage(Zimg);
Z.velocityX = -3;
Z.scale = 0.2;
Zgroup.add(Z);
}
  
  
  
  
  
      }




}


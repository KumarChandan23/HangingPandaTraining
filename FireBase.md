# FireBase
- Firebase is Backend-as-a-servic(BaaS) servide platform.
- It is developed by Google.
- Firebase helps you to build and scale web and mobile application.
- It provide collection of tools and services

# FireBase features
1. Authentication: Easy sign-in with email & password and Google, Facebook, Twitter and more
2. Firestore Database: 

# Firebase Authentication
- It is server provided by Firebase that helps you easy and secure authentication to web and mobile app.
- Firebase auth helps you
1. sign in user
2. sign out user
3. create use account 
4. manage user session
5. securely store and validate identity.
6. integrate third party provider like Google, FaceBook, Github, etc...

# Authentication method supported by firebase
1. 🔤 Email & Password: Traditional Login or Signup
2. 📱Phone Number: OTP based sign in.
3. Google: one-click login with Google.
4. FaceBook: social login.
5. GitHub: Developer auth.
6. Anonymous: No credential needed. 
7. Custom Auth: Create you own outh system.

# Installation in React
- in Terminal: npm install firebase

# login with Github

- const LoginWithGithub = ()=>{
    const provider = new GithubAuthProvider();
    try{
        const result = await SignInWithPopup();
        const credential = GithubAuthProvider.credentialFromResult(result);
        const user = result.user;
        clg(user);
        setUserDetial({
            name:user.displayName,
            email:user.email,
            uid:user.id
        })
    }catch(error){
        clg(error)
    }
} 

- const handleLogOut = ()=>{
    signOut(auth)
    .then(()=>{
        clg("user logged out);
        setUserDetials(null)
    })
    .catch((error)=>{
        clg("Logout Error",error);
    })
}

# for login with google change only

GithubAuthProvider -> GoogleAuthProvider

async function LoginWithGoogle()=>{
    const provider = new GoogleAuthProvider():
    try{
        const result = await SignInWithGoogle(Auth, provider);
        const user = result.user;
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const token = credentails.token;
    }catch(error){
        console.log("Error occured while Login with Google",error)
    }
}

# Firestore Database
- It is also know as cloud firestore.
- Firestore is no-sql cloud database from firebase.
- firestore allow you to store, sync and query data for apps.
- It is part of firebase
- It is used for mobile, web and server development.
- It is usefull for Real-time update, secure, data stored in cloud and easy to use in react. 


# upload image 
1. const [image, setImage] = useState(null);
2. const uploadImage = async ()=>{
    if(!image) return alert("Please select an image");
    try{
        // create unique reference path to in storage
        const imageRef = ref(storage, `upload/${Date.now()}_${image.name}`);

        // upload the file
        await uploadBytes(imageRef, image);

        // get the downloadable url
        const downloadImage = await getDownloadURL(imageRef);

        // save image in firebase
        await addDoc(collection(db,"image"), {
            imageUrl: downloadURL,
            createdAt:new Date()
            })

        alert("Image uploaded successfully");
        setImage(null);
    }
    catch(error){
        console.log("Error occured while uploading image", error);
        alert("Faild upload image");
    }
}
3. <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
4. <button onClick={uploadImage}> Upload image </button>

✅ for multiple images

1. const imageURLs = [];

2. for(let image of images){
    const imageRef = ref(storage, `upload/${Data.now()}_${image.name}`);
    await uploadBytes(imageRef, image);
    const downloadURL = await getDownloadURL(imageRef);
    imageURLs.push(downloadURL);
}

3. <input type="file" multiple onChange={(e)=> setImages(Array.from(e.target.files))}>


const LoginwithGoogle = async ()=>{
    const provideer = new GoogleAuthProvider();
    try{
        const result = await singInWithGoogle(Auth, provider);
        const credentials = GoogleAuthProvider.credentialsFromResult();
        const token = credentials.token;
        const user=result.user;
    }
}
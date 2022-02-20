
function simpleCipher(encrypted, k) {
    const encoder = 'zyxwvutsrqponmlkjihgfedcba'.split("")
    let cipherText = ''
    
    // Write your code here
    for(let i=0; i < encrypted.length; i++){
        console.log(encrypted[i].toLowerCase())
        let charIndex = encoder.findIndex( char=> char== encrypted[i].toLowerCase()) + k;
        if(charIndex >= encoder.length){
            charIndex = charIndex % encoder.length;
        }
        cipherText += encoder[charIndex].toUpperCase()
        
    }
    return cipherText

}

console.log(simpleCipher('VTAOG',2))



function carParkingRoof(cars, k) {
    cars.sort( (a,b)=> +a - +b);
    let n = cars.length;
    let minLength = Infinity;
    for(let i = 0; i < (n - k + 1); i++){
        minLength = Math.min(minLength, cars[i+k-1] - cars[i])
    }
    return minLength + 1;

}
console.log(carParkingRoof([6,7,2,12], 3))






// var lastStoneWeight = function (stones) {
//     while (stones.length > 1) {
//     stones.sort((a, b) => a - b);
//     const largestStone1 = stones.pop();
//     const largestStone2 = stones.pop();
//     let crushResult;
//     if (largestStone1 === largestStone2) {
//     crushResult = 0;
//     } else {
//     crushResult = Math.max(largestStone2, largestStone1) - Math.min(largestStone2, largestStone1);
//     }
//     if (crushResult > 0) {
//     stones.push(crushResult);
//     }
//     }
//     return stones.pop() || 0;
//     };


function main() {
    var a = readLine();
    var b = readLine();
  
    // Creating object with {"k": 5, "a": 2, "b": 1} for example
    var objA = countAlphabetFrequency(a);
    var objB = countAlphabetFrequency(b);
  
    var numOfDeletionsA = countNumberOfDeletions(objA,objB);
    var numOfDeletionsB = countNumberOfDeletions(objB,objA);
  
    console.log(numOfDeletionsA + numOfDeletionsB);
  }
  
  function countAlphabetFrequency (arrOfAlphabets){
      var resultObj = {}
  
      for (i = 0; i < arrOfAlphabets.length; i++) {
          if (resultObj[arrOfAlphabets[i]]) {
            resultObj[arrOfAlphabets[i]] += 1;
          } else {
            resultObj[arrOfAlphabets[i]] = 1;
          }
      }
      return resultObj;
  }
  
  function countNumberOfDeletions (mainObj, referenceObj){
      var numOfDeletions = 0;
  
      for (var k in mainObj) {
          if (mainObj.hasOwnProperty(k)) {
            if (mainObj[k] && referenceObj[k]) {
              // Alphabet k exists in both strings
              if (mainObj[k] > referenceObj[k]) {
                // Main string has more k than in reference string
                numOfDeletions += mainObj[k] - referenceObj[k];
                mainObj[k] = referenceObj[k];
              }
            } else {
              // Alphabet k only exists in Main string
              numOfDeletions += mainObj[k];
            }
          }
      }
  
      return numOfDeletions
  }

  console.log(countNumberOfDeletions());



  function getAllSubstrings(str) {
    let i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        result.push(str.slice(i, j))
      }
    }
    return result
  }

  

//   FOLLOWERS

// import mongoose, { Mongoose } from 'mongoose';
// import User from './User';

// const followSchema = new mongoose.Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     followId: { type: String, required: true },
//     followTrackerId: { type: String, unique: true },
//   },
//   { timestamps: true },
// );
// export const Follow = mongoose.model('Follow', followSchema);

// export const createFollowModel = async (userId: string, followerId: string) => {
//   let newId = userId + followerId;
//   const follow = new Follow({
//     userId: userId,
//     followId: followerId,
//     followTrackerId: newId,
//   });
//   const result = await follow.save();
//   return result;
// };

// export const getFollowersModel = async (userId: string, pageNo: number, pageSize: number) => {
//   const followList = await Follow.find({ userId });

//   let currentPageSize;

//   const userIdArray = followList.map((val) => val['followId']);
//   const result = await User.find({ _id: { $in: userIdArray } }).select({ _id: 1, email: 1 });
//   const resultWithPagno = await User
//     .find({ _id: { $in: userIdArray } })
//     .skip(pageNo - 1)
//     .limit(pageSize);

//   resultWithPagno.length < 5
//     ? (currentPageSize = resultWithPagno.length)
//     : (currentPageSize = pageSize);

//   const output = {
//     Totalfollowers: result.length,
//     pageNo,
//     pageSize: currentPageSize,
//     followers: resultWithPagno,
//   };
//   return output;
// };

// export const getFollowingModel = async (userId: string, pageNo: number, pageSize: number) => {
//   const followList = await Follow.find({ followId: userId });
//   // console.log(followList);

//   let currentPageSize;

//   const userIdArray = followList.map((val) => val['userId']);
//   const result = await User.find({ _id: { $in: userIdArray } }).select({ _id: 1, email: 1 });
//   const resultWithPagno = await User
//     .find({ _id: { $in: userIdArray } })
//     .skip(pageNo - 1)
//     .limit(pageSize);
//   resultWithPagno.length < 5
//     ? (currentPageSize = resultWithPagno.length)
//     : (currentPageSize = pageSize);
//   const output = {
//     Totalfollowing: result.length,
//     pageNo,
//     pageSize: currentPageSize,
//     following: resultWithPagno,
//   };
//   return output;
// };

// export const unFollowModel = async (userId: string, followId: string) => {
//   let result = await Follow.deleteOne({ userId, followId });
//   return result;
// };

// export const suggestFollowersModel = async (userId: string, pageNo: number, pageSize: number) => {
//   let myFollowing = await Follow.find({ followId: userId }).select({ userId: 1 });
//   let myFollowingArr = myFollowing.map((item) => item.userId.toString());
//   let myFollowingsNetwork: any = await myFollowingsConnection(myFollowingArr);
//   let data = await filterConnections(myFollowingArr, myFollowingsNetwork);
//   let suggestedConnection = await User.find({ _id: { $in: data } });
//   // console.log(suggestedConnection, 'find');
//   return suggestedConnection;
// };

// async function myFollowingsConnection(followingList: any) {
//   let data = await Follow.find({ followId: { $in: followingList } });
//   let myNetwork = data.map((item) => item.userId.toString());
//   return new Promise((resolve, reject) => {
//     if (myNetwork) {
//       resolve(myNetwork);
//     } else {
//       resolve('your connections are not folllowing anyone');
//     }
//   });
// }

// async function filterConnections(followingList: Array<string>, connectionList: Array<string>) {
//   let ans = connectionList.filter((val) => !followingList.includes(val));
//   console.log(ans);
//   return new Promise((resolve, reject) => {
//     if (ans) {
//       resolve(ans);
//     } else {
//       resolve('no follow suggestion');
//     }
//   });
// }



// export const createProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//   const profile = await User.findOne({ email: req.user.email });
//   if (profile) return next(new ErrorHandler(400, 'User can not create multiple profiles'));
//   const newProfile = await User.create({
//     user: req.user.email,
//     name: req.body.name,
//     bioData: req.body.bioData,
//   });

//   return res.status(201).json({
//     status: 'successful!',
//     data: { newProfile },
//   });
// });


// export const getProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) =>{
//   const profile = await User.findOne({_id:req.params.id})
//   res.status(201).json({
//     status: 'successful!',
//     profile
//   });  
// })


// export const updateProfile = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
//   const profile = await User.findOneAndUpdate({ email: req.user.email });
//   res.status(201).json({
//     status: 'successful!',
//     message: 'profile updated',
//     profile,
//   });
// });

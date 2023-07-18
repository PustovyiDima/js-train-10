const article = {
   id: 1512151,
   title: "My article",
   dexcription: "This some info",
   categoryId: 12335,
   likeAmount: 12,
};

const ARTICLE_FIELD = {
   id: 244548,
   title: "title text",
};

const articlePhoto = {
   photoUrl: "nfvdnvjdn",
   photoId: 154155,
   photoType: "big",
};

const articleComentList = {
   list: [{ usrtId: 4651, user: "Ivan", message: "Very well" }],
};

let art = Object.assign(article, articlePhoto, articleComentList); //перезаписує таргет

// console.log(art);

console.log(Object.entries(art)); //переписує в масив масивів

const formList = Object.entries(art);
let formListMap = formList.map(([key, value]) => {
   return `${ARTICLE_FIELD[key]} : ${value}`;
});
console.log(formListMap);

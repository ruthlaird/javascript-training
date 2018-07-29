export default class Likes {
    constructor () {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = {id, title, author, img};
        this.likes.push(like);

        // Persist data in localStorage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // Persist data in localStorage
        this.persistData();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        // setItem uses a key value pair of strings so have to convert likes array to a string using JSON.strinfy
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        // need to convert back to an array using JSON.parse
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Restore likes from the localStorage
        if (storage) this.likes = storage;
    }
} 
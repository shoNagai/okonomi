pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/math/SafeMath.sol";


contract Okonomi {
    
    using SafeMath for uint;
    
    struct Post {
        uint postId;
        uint like;
        uint dislike;
        string station;
        string fromLine;
        string toLine;
    }

    Post[] public posts;

    struct Step {
        uint postId;
        uint stepId;
        string comment;
        string photo;
    }

    Step[] public steps;

    constructor() public {
        steps.push(Step(0, 0, "firstComment", "firstPhot"));
        steps.push(Step(0, 1, "secondComment", "secondPhot"));
        steps.push(Step(0, 2, "thirdComment", "thirdPhot"));

        posts.push(Post(0, 0, 0, "溜池山王", "銀座線", "南北線")); 
    }

    function search(string _station, string _fromLine, string _toLine) public returns (Post) {
        for (uint i = 0; i < posts.length; i++) {
            if (keccak256(_station) == keccak256(posts[i].station)
                && keccak256(_fromLine) == keccak256(posts[i].fromLine)
                && keccak256(_toLine) == keccak256(posts[i].toLine)) {
                
                return posts[i];

            }
        }
    }
    
    function addPost(string[] _comments, string[] _photos, string _station, string _fromLine, string _toLine) public {

        require(_comments.length == _photos.length);
        for (uint i = 0; i < _comments.length; i++) {
            steps.push(Step(posts.length, i, _comments[i], _photos[i]));
        }
        
        posts.push(Post(posts.length, 0, 0, _station, _fromLine, _toLine)); 
    }
    
    function addLike(uint _postId) public  returns (Post) {
        require(posts.length > _postId);
        
        posts[_postId].like = posts[_postId].like.add(1);
        return posts[_postId];
    }
    
    function addDislike(uint _postId) public  returns (Post) {
        require(posts.length > _postId);
        
        posts[_postId].dislike = posts[_postId].dislike.add(1);
        return posts[_postId];
    }
    
    


}

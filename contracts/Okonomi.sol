pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;
import "github.com/OpenZeppelin/zeppelin-solidity/contracts/math/SafeMath.sol";


contract Okonomi {
    
    using SafeMath for uint;
    
    struct Post {
        uint postId;
        string userName;
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

        posts.push(Post(0, "Yuka Tsuboi", 0, 0, "Shibuya", "JR Yamanote", "Keio Inokashira")); 
    }

    function searchPostIds(string _station, string _fromLine, string _toLine) public view returns (uint[]) {
        
        uint[] postIds;
        
        for (uint i = 0; i < posts.length; i++) {
            if (keccak256(_station) == keccak256(posts[i].station)
                && keccak256(_fromLine) == keccak256(posts[i].fromLine)
                && keccak256(_toLine) == keccak256(posts[i].toLine)) {

                postIds.push(posts[i].postId);
            }
        }
                    
        return postIds;
    }
    
    function getPost(uint _postId) public view returns (uint, string, uint, uint, string, string, string) {
        return (
            posts[_postId].postId,
            posts[_postId].userName,
            posts[_postId].like,
            posts[_postId].dislike,
            posts[_postId].station,
            posts[_postId].fromLine,
            posts[_postId].toLine
        );
    }

    function getPostIds() public view returns (uint[]) {
        uint[] postIds;
        
        for (uint i = 0; i < posts.length; i++) {
            postIds.push(posts[i].postId);
        }
                    
        return postIds;
    }
    
    function getStep(uint _stepId) public view returns (uint, uint, string, string) {
        return (steps[_stepId].postId, steps[_stepId].stepId, steps[_stepId].comment, steps[_stepId].photo);
    }

    function getStepIds() public view returns (uint[]) {
        uint[] stepIds;
        
        for (uint i = 0; i < steps.length; i++) {
            stepIds.push(steps[i].stepId);
        }
                    
        return stepIds;
    }

    function addPost(string _station, string _fromLine, string _toLine, string _userName) public {
        posts.push(Post(posts.length, _userName, 0, 0, _station, _fromLine, _toLine)); 
    }
    
    function addStep(uint _postId, uint _stepId, string _comment, string _photo) public {
        steps.push(Step(_postId, _stepId, _comment, _photo));
    }
    
    function addLike(uint _postId) public {
        require(posts.length > _postId);
        
        posts[_postId].like = posts[_postId].like.add(1);
    }
    
    function addDislike(uint _postId) public {
        require(posts.length > _postId);
        
        posts[_postId].dislike = posts[_postId].dislike.add(1);
    }
}

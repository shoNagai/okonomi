pragma solidity ^0.4.23;


contract Okonomi {
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
        uint comment;
        uint photo;
    }

    Step[] public steps;

    constructor() public {
        steps.push(Step(0, 0, "firstComment", "firstPhot"));
        steps.push(Step(0, 1, "secondComment", "secondPhot"));
        steps.push(Step(0, 2, "thirdComment", "thirdPhot"));

        posts.push(Post(0, 0, 0, "溜池山王", "銀座線", "南北線")); 
    }

    function serch(string _station, string _fromLine, string _toLine ) public {
        for (uint i = 0; p < posts.length; i++) {
            if (_station == posts[i].station
                && _fromLine == posts[i].fromLine
                && _toLine == posts[i].toLine) {
                
                return posts[i];

            }
        }
    }


}

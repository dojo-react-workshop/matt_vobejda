//1st one - feed function a string, return a boolean designating if the paren's match up (see picture, easy - go through it if need too...)
//2nd one - given an array of integers that designate terrace heights, terraces can gather water, tell the volume of 
//water that can be caught by the terraces [3,1,5,2,6,4,6,2,3]

//loop through, find the max (find volumes of left and right side...)
//also set a left bound
//keep track of water_count = 0







//        *   *    
//    *   *   *    
//    *   * * *    
//*   *   * * *   *
//*   * * * * * * *
//* * * * * * * * *
//    L   M
//        C



//*           *
//*           *
//*           *
//*   *   *   *
//* * * * * * *

//Is current less then left bound
//Yes -> L-C = 2, add 2 to water_count...
//No -> move left bound to C
//water_count = 0,+2,+3,

//got through again, setting R bound and iterate backwards...
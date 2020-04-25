// TODO: write your code here
import sum from './basic';



export default function find(a,b) {
        return function(x) {
            // console.log(x[a]);
            // console.log(a);
          return x[a] == b;
        };
      
}
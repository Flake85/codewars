// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr)
{
  let right_sum = 0, left_sum = 0;
        for (let i = 1; i < arr.length; i++){
            right_sum += arr[i];
        }
        
        if (left_sum === right_sum){
            return 0;
        }
  
        for (let i = 0, j = 1; j < arr.length; i++, j++) {
            right_sum -= arr[j];
            left_sum += arr[i];
  
            if (left_sum === right_sum){
                return i + 1 ;
            }
        }
  
        return -1;
}
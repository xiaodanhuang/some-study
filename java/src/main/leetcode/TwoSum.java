package main.leetcode;


public class TwoSum {

    public  static void main(String [] args){

        int nums []= {2, 7, 11, 15};
        int target = 9;
       int[] arr=twoSum( nums,  target);
      System.out.println(arr);
    }
    public static  int[] twoSum(int[] nums, int target) {
        for(int i=0;i<nums.length;i++){
            for(int j=0;j<nums.length;j++){
                if(i!=j&&nums[i]+nums[j]==target){
                    int arr[]=new int[2];
                    arr[0]=i;
                    arr[1]=j;
                    return arr ;

                }
            }
        }
        return null;
    };
}

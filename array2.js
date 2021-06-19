function  countBoomerangs(arr) 
{
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==arr[i+2] && arr[i]!=arr[i+1])
        {
            count++;
        }
    }
    return count;
}
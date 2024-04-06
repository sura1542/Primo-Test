// Please write a typescript project with unit test:

// For implementing function with this interface
//     merge (int[] collection_1, int[] collection_2, int[] collection_3) : int []

// given
//      collection_1, collection_3 already sorted from min(0) to max
//      collection_2 already sorted from max to min(0)

// Please provide accessible repo of typescript project with unit test
// and provide how to setup dependency and execute code and unit test

// Note: Don't allow to use any sort function


export function PRIMO(num1: number[], num2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < num1.length && j < num2.length) {
        if (num1[i] < num2[j]) {
            result[k] = num1[i];
            i++;
        } else {
            result[k] = num2[j];
            j++;
        }
        k++;
    }

    while (i < num1.length) {
        result[k] = num2[i];
        i++;
        k++;
    }

    while (j < num2.length) {
        result[k] = num2[j];
        j++;
        k++;
    }

    return result;
}



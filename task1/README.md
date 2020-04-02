<h1>Task 1. Caesar cipher CLI tool </h1>


<p>Simple CLI tool which encode and decode a text by Caesar cipher. (use only the English alphabet) </p>

CLI tool accepts 4 options:

1.  **-a, --action**: an action encode/decode (required) 
2.  **-s, --shift**: a shift (required) 
3.  **-i, --input**: an input file 
4.  **-o, --output**: an output file


Command examples: 

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node my_caesar_cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
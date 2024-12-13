# BigInteger Calculator

A command-line calculator that handles arbitrary-precision integers with support for various number formats and mathematical operations.

## Features

### ✅ Working Operations

- **Basic Arithmetic**

  - Addition (+)
  - Subtraction (-)
  - Multiplication (\*)
  - Division (/)
  - Modulo (%)

- **Advanced Operations**
  - Exponentiation (^)
  - Factorial (!)

### ✅ Supported Number Formats

- Decimal (base 10): `123`, `-456`
- Binary (base 2): `0b1010`, `-0b1100`
- Hexadecimal (base 16): `0xFF`, `-0xAB`
- Octal (base 8): `0o77`, `-0o12`

### ❌ Not Implemented

- Decimal numbers (floating-point)
- Logarithmic operations
- Scientific notation

## Use

You can run the calculator in two ways:

### 1. Using Bun

```bash
npm run start
```

### 2. Direct Execution

First, make the calculator executable:

```bash
chmod +x calc
```

Then run it directly:

```bash
./calc
```

Both methods will start the interactive calculator session.

### Example Operations

```
> 123 + 456
579

> 0xFF + 0b1010
265

> 5!
120

> 2^10
1024

> 100 / 5
20
```

## Implementation Details

The calculator uses Node.js's built-in `BigInt` type for arbitrary-precision integer arithmetic. The program is structured into several modules:

- Input parsing and validation
- Special operator handling (factorial, exponentiation)
- Regular operator processing
- Number format conversion
- Regular operator processing

## Error Handling

The calculator provides error messages for:

- Invalid inputs
- Invalid operator combinations
- Syntax errors
- Division by zero

## Technical Limitations

1. **Decimal Numbers**: Currently only supports integer operations. Decimal numbers are not supported due to BigInt limitations.
2. **Logarithms**: Not implemented as they typically result in decimal numbers.
3. **Maximum Values**: Limited by available system memory due to BigInt implementation.

## Future Improvements

- [ ] Add support for decimal numbers
- [ ] Implement logarithmic operations
- [ ] Add scientific notation support
- [ ] Improve error messages and handling

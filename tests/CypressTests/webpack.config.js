module.exports = {
    resolve: {
        extensions: ['.ts', '.js'],  // Make sure to include '.ts'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
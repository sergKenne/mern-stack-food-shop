module.exports = {
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
        }),
    ],
};

module.exports = {
    linters: {
        '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue|jsx)': [
            'eslint --fix',
            'prettier --write',
            'git add',
        ],
    },
}

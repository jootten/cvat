// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) 2023 CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

module.exports = {
    ignorePatterns: [
        'src/3rdparty/**',
        'node_modules/**',
        'dist/**',
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['jest'],
};

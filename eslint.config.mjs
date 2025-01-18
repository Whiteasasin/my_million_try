import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    "rules": {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-trailing-spaces": "error",
      "semi": ["error" , "always"],
      "arrow-parens": [
        "error",
        "always"
      ]
    }
  }
  
];
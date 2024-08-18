import React from "react";
import { Link } from "gatsby";
import GithubSVG from "../../assets/github-mark.svg";

const ButtonGit = () => {

    return(
        <button>
            <Link href="http://www.github.com" target="_blank">
                <GithubSVG className="logo"/>
            </Link>
        </button>

    );
}
import React, { Component } from "react"
import { Octokit } from "@octokit/core"
import MainDiary from "./EntriesMapper"
import Loader from "../../component/loader"

const token = process.env.github_api
const id = "a928b1fbcf1738da26ea5d7125e911cb"

class Dairy extends Component {
    state = {
        entry: [],
        loading: true,
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        const octokit = new Octokit({
            auth: token,
        })

        const response = await octokit.request("GET /gists/{gist_id}/comments", {
            headers: {
                accept: "application/vnd.github.v3+json",
            },
            gist_id: id,
        })
        // console.log(response.data.body)
        this.setState({ entry: [...response.data], loading: false })
    }
    render() {
        const { entry, loading } = this.state
        return <div className="xoxo">{loading ? <Loader /> : <MainDiary entry={entry} />}</div>
    }
}

export default Dairy

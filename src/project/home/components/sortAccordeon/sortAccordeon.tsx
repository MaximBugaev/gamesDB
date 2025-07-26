import { getAllTags } from "@/shared/services/requests";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react"
import './sortAccordeon.css'

export function SortAccordeon() {
    const [tags, setTags] = useState([]);
    const [isOpened, setIsOpened] = useState(false);
    const selectedTag = useSearch({ strict: false })['sort-type'];
    const [currentTag, setCurrentTag] = useState(selectedTag || '');
    const navigate = useNavigate();

    function handleClick(value) {
        navigate({
            search: (prev) => ({ ...prev, 'sort-type': value}),
            replace: true
        })
    }

    useEffect(() => {
        getAllTags()
            .then(res => res.results)
            .then(results => setTags(results))
    }, []);

    const tagsMapList = tags.map(tag => (
        <label htmlFor={tag.name}  className="tag-select__tag" key={tag.name} onClick={() => {
            setCurrentTag(tag.name)
            handleClick(tag.slug)
        }}>
            <input className='tag-select__input' type="radio" value={tag.name} id={tag.name} name='tags' />
            <span className='tag-select__caption'>#{tag.name}</span>
        </label>
    ))

    return (
        <div className="tag-select-wrap">
            <div className="tag-select-wrap__select" onClick={() => setIsOpened(!isOpened)}>
                {currentTag ? currentTag : 'Choose sort order'}
            </div>
            <div className={`tag-select-wrap__tags ${isOpened ? 'tag-select-wrap__tags_opened' : false}`} >
                <label htmlFor='nothing' className="tag-select__tag" onClick={() => handleClick('')}>
                    <input className='tag-select__input' type="radio" id='nothing' name='tags' onClick={() => {
                        setCurrentTag('Choose sort order')
                    }}/>
                    <span className='tag-select__caption'>nothing</span>
                </label>
                {tagsMapList}
            </div>
        </div>
    )
}
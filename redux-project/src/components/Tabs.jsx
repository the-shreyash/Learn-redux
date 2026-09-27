import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'GIF']

    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.Search.activeTab)

    return (
        <div className="flex gap-10 p-10">
            {tabs.map((elem) => (
                <button
                    key={elem}
                    onClick={() => dispatch(setActiveTabs(elem))}
                    className={`px-5 py-2 rounded text-white cursor-pointer transition
                        ${activeTab === elem
                            ? 'bg-blue-500'
                            : 'bg-gray-800'
                        }`}
                >
                    {elem}
                </button>
            ))}
        </div>
    )
}

export default Tabs

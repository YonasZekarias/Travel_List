export function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li>
            <input
                type="checkbox"
                value={item.packed}
                onClick={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)} style={{ color: "red" }}>
                &times;
            </button>
        </li>
    );
}

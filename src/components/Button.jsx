import { Link } from 'react-router-dom'

export default function Button({ variant = 'primary', children, to, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-2.5 font-medium transition shadow-sm hover:shadow-lg'
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
  const content = (
    <span className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </span>
  )
  return to ? <Link to={to}>{content}</Link> : content
}



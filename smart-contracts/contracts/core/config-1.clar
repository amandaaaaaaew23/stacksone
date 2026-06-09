;; Config updated 2026-06-09T09:06:47Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u18)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)

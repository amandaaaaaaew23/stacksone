;; Config updated 2026-06-14T14:46:04Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u41)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)

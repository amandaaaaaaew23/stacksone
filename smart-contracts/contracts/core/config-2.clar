;; Config updated 2026-06-10T16:16:37Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u43)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)

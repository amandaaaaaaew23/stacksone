;; Config updated 2026-06-14T05:28:25Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u4)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
